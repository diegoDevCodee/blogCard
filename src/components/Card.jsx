const Card = () => {
  return (
    <article className="bg-whiteTail p-6 mx-5 sm:w-[24rem] rounded-2xl border-2 border-black shadow-[8px_9px_0px_0px_rgb(0,0,0)]">
      <div className="rounded-xl overflow-hidden">
        <img
          src="images/illustration-article.svg"
          alt="illustration"
          className="object-cover w-full"
        />
      </div>

      <button className="block px-3 py-1 bg-yellowTail rounded-md font-extrabold text-blackTail mt-6">
        Learning
      </button>

      <section className="flex flex-col gap-3 mt-3 mb-6">
        <span>Published 21 Dec 2023</span>

        <h1 className="text-2xl font-extrabold">HTML & CSS foundations</h1>

        <p className="text-greyTail">
          These lenguages are the backbone of every website, defining structure,
          content and presentation.
        </p>
      </section>

      <footer className="flex items-center gap-4">
        <div>
          <img src="images/image-avatar.webp" alt="user" className="w-9 h-9" />
        </div>

        <h3 className="text-blackTail font-extrabold">Greg Hooper</h3>
      </footer>
    </article>
  );
};

export default Card;
