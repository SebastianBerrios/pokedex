import code from "../../assets/icons/code.svg";
import github from "../../assets/icons/github.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import discord from "../../assets/icons/discord.svg";

export default function SocialMedia() {
  return (
    <div className="flex gap-2 justify-center pt-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://github.com/SebastianBerrios/pokedex"
      >
        <img src={code} alt="code" loading="lazy" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://github.com/SebastianBerrios"
      >
        <img src={github} alt="github" loading="lazy" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://www.youtube.com/@electrocodee"
      >
        <img src={youtube} alt="youtube" loading="lazy" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://www.instagram.com/electrocodee/"
      >
        <img src={instagram} alt="instagram" loading="lazy" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://www.tiktok.com/@electrocodee"
      >
        <img src={tiktok} alt="tiktok" loading="lazy" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        href="https://www.discord.gg/4mj2bemRkr"
      >
        <img src={discord} alt="discord" loading="lazy" />
      </a>
    </div>
  );
}
