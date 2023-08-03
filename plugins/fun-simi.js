import fetch from "node-fetch"
let handler = async (m, { conn, text }) => {  
let sistema1 = await fetch(`https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt`).then(v => v.text())

async function getOpenAIChatCompletion(texto) {
  const openaiAPIKey = global.openai_key
  let chgptdb = global.chatgpt.data.users[m.sender]
  chgptdb.push({ role: 'user', content: texto })
  const url = "https://api.openai.com/v1/chat/completions"
  const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${openaiAPIKey}` };
  const data = { "model": "gpt-3.5-turbo", "messages": [{ "role": "system", "content": sistema1 }, ...chgptdb, ]};
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error al obtener respuesta de OpenAI")
    }
    const result = await response.json()
    const finalResponse = result.choices[0].message.content
    return finalResponse
  } catch (error) {
    console.error("Error, vuelva a intentarlo:", error)
    return null;
  }
}

let respuesta = await getOpenAIChatCompletion(text)
m.reply(respuesta)
}
handler.command = /^(bot|elmo|simsimi|simisimi)$/i
export default handler
