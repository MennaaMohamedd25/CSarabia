import React from "react";
import marketOne from "../images/cwsa1.png";
import marketTwo from "../images/cwsa2.png";
import marketThree from "../images/cwsa3.png";
import marketFour from "../images/cwsa4.png";

const marketData = [
  {
    id: 1,
    image: marketOne,
    title: "INNOVATION",
    point1:
      "Staupers Compact Flotation Unit showcases its commitment to continuous innovation by revolutionizing oil-water separation processes. This technology leverages a unique internal design to enhance the efficiency and effectiveness of separating oil and gas from produced water. The CFU’s advanced capabilities include handling higher volumes of fluids with greater stability and less environmental impact compared to traditional methods. Stauper’s focus on technological advancement in its CFU design significantly contributes to improving operational efficiencies and environmental compliance in the oil and gas industry",
  },
  {
    id: 2,
    image: marketTwo,
    title: "SUSTAINABILITY",
    point1:
      "Staupers Compact Flotation Unit exemplifies a strong commitment to sustainability within the oil and gas sector. By enhancing the efficiency of oil-water separation, this unit significantly reduces the volume of pollutants entering natural water bodies, aligning with eco-friendly practices and helping preserve vital natural resources. The units design minimizes the ecological footprint of extraction operations, supporting the industrys shift towards more sustainable and environmentally responsible practices. This commitment is crucial in fostering a balance between resource extraction and environmental stewardship.",
  },
  {
    id: 3,
    image: marketThree,
    title: "QUALITY",
    point1:
      "At Continuous Water Services Arabia, adhering to high standards and maintaining rigorous quality controls is paramount in ensuring the reliability and efficacy of our services. This commitment to quality underpins all our operations, from the technologies we employ to the methodologies we follow, ensuring that every project meets stringent industry benchmarks. Our focus on maintaining the highest quality standards not only ensures operational excellence but also strengthens client trust and supports sustainable practices across all our engagements.",
  },
  {
    id: 4,
    image: marketFour,
    title: "SOLUTION",
    point1:
      "Stauper's Compact Flotation Unit (CFU) is a cutting-edge technology designed for the efficient separation of oil and gas from produced water in the oil and gas industry. The unit operates by introducing water into the system, where its unique design creates a dynamic environment to separate oil droplets and gas bubbles from the water. This process is facilitated by the CFU's specialized configuration, which enhances the separation efficiency through a combination of centrifugal forces and fluid dynamics. The CFU is designed to be robust and maintenance-free, with no moving parts, making it an ideal solution for both new installations and retrofit applications in existing facilities. This technology not only helps in meeting stringent environmental discharge regulations but also improves operational efficiency by reducing the space and weight requirements compared to traditional systems.",
 
  },
];

const CWSAMarket = () => {
  return (
    <div className="w-[95%] mx-auto px-[16px] py-[2.5rem] text-center md:text-left xl:px-[24px] lg:px-[24px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {marketData.map((item) => (
          <div key={item.id} className="flex flex-col items-start text-start">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-[24px] w-full h-auto"
            />
            <h3 className="mt-4 text-[24px] font-bold">{item.title}</h3>
            <ul className=" mt-4">
              <li className="mb-4 text-secondery">{item.point1}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CWSAMarket;
