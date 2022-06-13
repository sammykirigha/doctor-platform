import React from "react";
import { FiArrowRight } from 'react-icons/fi';

const Overview = () => {
    return (
        <div className="mt-4 flex flex-col">
            <p className="text-lg text-gray-400 ">
                A gynecologist is a surgeon who specializes in the female
                reproductive system, which includes the cervix, fallopian tubes,
                ovaries, uterus, vagina and vulva. Menstrual problems,
                contraception, sexuality, menopause and infertility issues are
                diagnosed and treated by a gynecologist; most gynecologists also
                provide prenatal care, and some provide primary care.
			</p>
			<div className="flex flex-col mt-3">
				<span className="text-md text-slate-900 font-semibold">Spacialities:</span>
				<div className="flex flex-col mt-5">
					<span className=" inline-flex items-center text-gray-600 text-md mb-1"><FiArrowRight className="text-blue-600 mr-2" /> Women's health services</span>
					<span className=" inline-flex items-center text-gray-600 text-md mb-1"><FiArrowRight className="text-blue-600 mr-2 "/> Pregnancy care</span>
					<span className=" inline-flex items-center text-gray-600 text-md mb-1"><FiArrowRight className="text-blue-600 mr-2 "/>  Surgical procedures</span>
					<span className=" inline-flex items-center text-gray-600 text-md mb-1"><FiArrowRight className="text-blue-600 mr-2 "/> Specialty care</span>
					<span className=" inline-flex items-center text-gray-600 text-md mb-1"><FiArrowRight className="text-blue-600 mr-2 "/> Conclusion</span>
				</div>
			</div>
        </div>
    );
};

export default Overview;
