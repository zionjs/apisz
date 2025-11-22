import { createCanvas } from "@napi-rs/canvas";

export default function handler(req, res) {
  const text = req.query.text || "HALAH NYOCOT";

  const canvas = createCanvas(1080, 1350);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#B24A2C";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "bold 180px serif";
  ctx.fillStyle = "#F5E5C7";
  ctx.textAlign = "center";

  const words = text.split(" ");
  words.forEach((word, i) => {
    ctx.fillText(word, canvas.width / 2, 350 + i * 250);
  });

  res.setHeader("Content-Type", "image/png");
  res.end(canvas.toBuffer("image/png"));
}