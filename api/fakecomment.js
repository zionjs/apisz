import { createCanvas, loadImage } from "@napi-rs/canvas";

export default async function handler(req, res) {
  const text = req.query.text || "😂😂😂😂";
  const username = req.query.user || "citraputami390";
  const avatar = req.query.avatar || "https://i.imgur.com/6QfK4hG.png";

  const canvas = createCanvas(1080, 400);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#1A1A1A";
  ctx.fillRect(0, 0, 1080, 400);

  const img = await loadImage(avatar);
  ctx.save();
  ctx.beginPath();
  ctx.arc(100, 200, 70, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(img, 30, 130, 140, 140);
  ctx.restore();

  ctx.fillStyle = "white";
  ctx.font = "bold 50px Arial";
  ctx.fillText(username, 200, 195);

  ctx.font = "45px Arial";
  ctx.fillStyle = "#e4e4e4";
  ctx.fillText(text, 200, 260);

  res.setHeader("Content-Type", "image/png");
  res.end(canvas.toBuffer("image/png"));
}