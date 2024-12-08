import { Trip } from "@/type/trip_base";
const OPENAI_SECRET = '';
export const getTripPlanFromAI = async (prompt: string) => {

     const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${OPENAI_SECRET}`
            },
            body: JSON.stringify({
                "model": "gpt-3.5",
                "messages": [{"role": "user", "content": `${prompt}, please return data in this data structure, type data : [
                    location: {
                        name?: string;
                        description?: string;
                        // timestamp
                        date?: string;
                    }
                ]`}],
                "temperature": 0.7
            })}
        );
    return res.json();

}