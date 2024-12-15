import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Pdf from "@/public/images/pdf.png";
import News from "@/public/images/news.png";
import Bitcoin from "@/public/images/bitcoin.png";
import Tis from "@/public/images/tis.png";
import Predictor from "@/public/images/image.png";
import Shoes from "@/public/images/shoe.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link href={"https://huggingface.co/spaces/jimil07/news-jimil"} target="_blank">
              <Image
                src={News}
                alt="BERT Based News Classifier"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">BERT Based News Classifier</div>
            <Link
              href={"https://huggingface.co/spaces/jimil07/news-jimil/tree/main"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            a BERT based news classifier that classifies news into 4 categories: Business, Entertainment, Politics, and Sports.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              BERT
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Python
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Hugging Face
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              PyTorch
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Hugging Face
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Pandas
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              NLTK
            </div>
          </div>
        </div>


        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link
              href={"https://github.com/Jimil1407/AR_Logistics_pro"}
              target="_blank"
            >
              <Image
                src={Shoes}
                alt="AR Logistics"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">
              {" "}
              AR Logistics
            </div>
            <Link
              href={"https://github.com/Jimil1407/AR_Logistics_pro"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
              a AR Logistics that allows users to view the product in 3D and add it to their cart.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Python
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              PyTorch
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              AR
            </div>
          </div>
        </div>


        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link
              href={"https://github.com/Jimil1407/bitcoin_price_predictor"}
              target="_blank"
            >
              <Image
                src={Bitcoin}
                alt="Bitcoin Price Predictor"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">
              {" "}
              Bitcoin Price Predictor
            </div>
            <Link
              href={"https://github.com/Jimil1407/bitcoin_price_predictor"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            a Bitcoin Price Predictor that predicts the price of Bitcoin using a FB Prophet model.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Python
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              FB Prophet
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Flask
            </div>
          </div>
        </div>

        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link
              href={"https://github.com/Jimil1407/image_detection"}
              target="_blank"
            >
              <Image
                src={Predictor}
                alt="Bitcoin Price Predictor"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">
              {" "}
              Image Caption Generator
            </div>
            <Link
              href={"https://github.com/Jimil1407/image_detection"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            a Image Caption Generator that generates a caption for an image using a pre-trained model.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Python
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              VGG16
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              OpenCV
            </div>
          </div>
        </div>

        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link
              href={"https://researchbot-jimil.streamlit.app/"}
              target="_blank"
            >
              <Image
                src={Pdf}
                alt="PDF Summarizer"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">
              {" "}
              PDF Summarizer
            </div>
            <Link
              href={"https://github.com/Jimil1407/bitcoin_price_predictor"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            a PDF Summarizer that summarizes the text in a PDF file and generates questions based on the summary.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Streamlit
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Python
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Langchain
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              PyPDF2
            </div>
          </div>
        </div>

        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link href={"https://mern-tickets.vercel.app/"} target="_blank">
              <Image
                src={Tis}
                alt="Tis"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">TIS - Ticket Inquiry System</div>
            <Link     
              href={"https://github.com/Jimil1407/MERN_TICKETS"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            A MERN based customer ticketing application for enhanced user experience.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              React.js
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              PostgreSQL
            </div>
         
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Vercel
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              HTML/CSS
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Projects;
