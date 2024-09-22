import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            aliquid et vel blanditiis corporis illum, quam officia assumenda,
            aspernatur sint debitis excepturi, numquam amet omnis voluptate enim
            itaque rerum iusto!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            ullam excepturi esse ea, non inventore repudiandae rem eos soluta
            magni nobis doloribus consectetur sed. Quia at quisquam doloremque
            voluptate dolores?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus fugit voluptatum recusandae aut ipsam impedit quas,
            natus molestias necessitatibus vitae! Voluptates aspernatur nam
            commodi quis dolore aperiam optio perspiciatis accusamus.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur dolorum aliquid natus asperiores recusandae repudiandae
            laudantium quasi iusto quos saepe, officia sint veritatis eaque
            alias quibusdam fuga excepturi est quo?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur dolorum aliquid natus asperiores recusandae repudiandae
            laudantium quasi iusto quos saepe, officia sint veritatis eaque
            alias quibusdam fuga excepturi est quo?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur dolorum aliquid natus asperiores recusandae repudiandae
            laudantium quasi iusto quos saepe, officia sint veritatis eaque
            alias quibusdam fuga excepturi est quo?
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
