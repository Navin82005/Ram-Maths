import youtube_ref from "../../assets/image/youtube-ref.png";

const YoutubePromoSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-background rounded-2xl shadow-md">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Subscribe to Our YouTube Channel!
        </h2>
        <p className="text-lg text-secondary mb-6">
          Stay updated with the latest videos, tips, and tricks. Don't forget to
          like, share, and subscribe to support us!
        </p>
        <a
          href="https://www.youtube.com/@rammathstamil"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-white bg-accent rounded-lg shadow hover:opacity-90 transition"
        >
          Visit Channel
        </a>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={youtube_ref}
          alt="YouTube Promotion"
          className="w-4/5 rounded-xl"
        />
      </div>
    </section>
  );
};

export default YoutubePromoSection;
