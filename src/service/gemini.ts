'use server'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { getMoviePoster } from "./getMoviePoster";

// https://aistudio.google.com/app/apikey

export default async function findMovie(filmName: string): Promise<any[]> {
    try {
        if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
            console.log('sem api key')
            return [];
        }

        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
        });

        const generationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: "application/json",
        };

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
        ];

        const chatSession = model.startChat({
            generationConfig,
            safetySettings,
            history: [],
        });

        const result =
            await chatSession.sendMessage(`Given the name of a movie ${filmName}, return a list of the most similar movies based on genre, plot, and audience reviews using the Gemini API.`);

        const aiResp = JSON.parse(result.response.text());

        const movies = aiResp?.similar_movies ?? aiResp?.movies;


        const isLessThenSix = movies.length < 6;

        let quantity = 6
        if (isLessThenSix) {
            quantity = movies.length;
        }

        const moviesWithPosters = [];
        for (let index = 0; index < quantity; index++) {
            const element = movies[index];
            const poster = await getMoviePoster(element.title)
            moviesWithPosters.push({ ...element, poster: poster ? `https://image.tmdb.org/t/p/w500${poster}` : '' })
        }

        return moviesWithPosters;
    } catch (error: any) {
        const { data } = error?.response ?? { message: "Erro desconhecido" };
        console.error(data.message);

        return [];
    }
};