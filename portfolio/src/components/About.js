import React from "react";
//countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	return (
		<>
			<section className="section" id="about" ref={ref}>
				<div className="w-full flex justify-center">
					<div
						className="flex flex-col gap-y-10 lg:flex-row lg:items-center
          lg:gap-x-20 lg:gap-y-0 h-screen"
					>
						{/* image */}
						<motion.div
							variants={fadeIn("right", 0.3)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.3 }}
							className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
            mix-blend-lighten bg-left-top"
						></motion.div>
						{/* text */}
						<motion.div
							variants={fadeIn("left", 0.5)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.3 }}
							className="flex-1"
						>
							<h2 className="h2 text-accent">About me</h2>
							<h3 className="h3 mb-4">
								My name's Thai Quoc Tam - 18/03/2001, I'm Front-end Developer
							</h3>
							<p className="italic">
								<span className="text-accent">"</span>
								Think and affirm yourself!
								<span className="text-accent">"</span>
							</p>
							{/* stats */}
							<div className="flex gap-x-6 lg:gap-x-10 mb-12 my-3">
								<div>
									<div className="text-[40px] font-tertiary text-gradient mb-2">
										{inView ? <CountUp start={0} end={0} duration={3} /> : null}
									</div>
									<div className="font-primary text-sm tracking-[2px]">
										years of <br />
										Experience
									</div>
								</div>

								<div>
									<div className="text-[40px] font-tertiary text-gradient mb-2">
										{inView ? <CountUp start={0} end={3} duration={3} /> : null}
									</div>
									<div className="font-primary text-sm tracking-[2px]">
										Personal project <br />
									</div>
								</div>
							</div>
							<div className="flex gap-x-8 items-center">
								<button className="btn btn-lg">Contact me</button>
								<a href="#" className="text-gradient btn-link">
									My portfolio
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
