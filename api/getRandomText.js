import { getParagraphs, getSentences, getWords } from "./utils"

export default (req, res) => {
  const { query } = req
  const { type, value } = query

  if (type === "words") {
    const words = getWords(Number(value))
    res.statusCode = 200
    res.send(words)
  } else if (type === "sentences") {
    const sentences = getSentences(Number(value))
    res.statusCode = 200
    res.send(sentences)
  } else if (type === "paragraphs") {
    const paragraphs = getParagraphs(Number(value))
    res.statusCode = 200
    res.send(paragraphs)
  }
}
