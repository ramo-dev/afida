import Image from "next/image";
import transparency from "../assets/images/transparency.jpeg";
import lowFees from "../assets/images/low-fees.jpeg";
import security from "../assets/images/security.webp";
import decentralization from "../assets/images/decentralization.jpeg";

const ReasonSlide = ({ backgroundImage, title, description, peopleJoined }) => {
  return (
    <div>

      <div
        className="z-0 brightness-75 transition hover:brightness-100 rounded-lg flex-none w-[300px] h-full lg:w-[400px] lg:h-[300px] min-w-[300px] bg-cover bg-no-repeat rounded-r-5xl 2xl:rounded-5xl scroll-container" // Set a specific width for scrolling

        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
      </div>
      <div className="flexCenter gap-6 mt-5">
        <span className="flex -space-x-4 overflow-hidden">

          {/* You can add more images if necessary */}
        </span>
        <p className="font-bold text-xl text-primary">{peopleJoined}</p>
      </div>

      <div className="flex h-full flex-col items-start justify-between py-5">
        <div className="flexCenter gap-4">

          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-2xl text-white">{title}</h4>
            <p className=" text-white text-lg">{description}</p>
          </div>
        </div>

      </div>

    </div>
  );
};

const WhyBlockchain = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        {/* Example slides showcasing blockchain benefits */}
        <ReasonSlide
          backgroundImage={decentralization}
          title="Immutable Records"
          description="Every contribution and campaign update is permanently stored on the blockchain, providing a trusted, tamper-proof record. This gives backers confidence that funds are being used responsibly."
          peopleJoined="1000+ Users"
        />
        <ReasonSlide
          backgroundImage={transparency}
          title="Empoweriing Innovations"
          description="Afida connects creators with backers to drive community innovation, supporting impactful projects from tech to social initiatives, turning ideas into reality."
          peopleJoined="750+ Verified Donations"
        />
        <ReasonSlide
          backgroundImage={lowFees}
          title="Lower Transaction Fees"
          description="Afida minimizes costs by using blockchain technology to handle transactions, ensuring that more of the money you raise goes directly to your cause."
          peopleJoined="500+ Projects Benefiting"
        />
        <ReasonSlide
          backgroundImage={security}
          title="Enhanced Security"
          description="Smart contracts ensure funds are handled securely, reducing fraud risks."
          peopleJoined="1200+ Campaigns Secured"
        />
      </div>

    </section>
  );
};

export default WhyBlockchain;
