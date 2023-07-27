import React from "react";
// icon
// import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const services = [
	{
		name: "Web mobile",
		framework: "React.JS, Node.JS(Express), Tailwind CSS, Sequelize",
		git: "https://github.com/ThaiQuocTam/Web_mobile.git",
		description:
			"Specializing in selling electronic products and providing online shopping functionalities",
		link: "Demo",
	},
	{
		name: "Todo list app",
		framework: "Vue.js, Tailwind CSS",
		git: " https://github.com/ThaiQuocTam/Vue_todo_list.git",
		description: "Todo list app demo with vue.js",
		link: "Demo",
	},
];

const Services = () => {
	return (
		<>
			<section id="services" className="section">
				<div className="container mx-auto">
					<div className="flex flex-col lg:flex-row">
						{/* text && image */}
						<motion.div
							variants={fadeIn("right", 0.3)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.3 }}
							className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten 
            mb-12 lg:mb-0"
						>
							<h2 className="h2 text-accent mb-6">What I Do.</h2>
							<h3 className="h3 max-w-[455px] mb-16">
								I'm a Javascript Developer
							</h3>
						</motion.div>
						{/* services */}
						<motion.div
							variants={fadeIn("left", 0.5)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.3 }}
							className="flex-1"
						>
							<div className="max-w-full flex justify-center font-bold text-3xl pb-3">
								<h2>Personal Project</h2>
							</div>
							{/* service list */}
							{services.map((service, index) => {
								const { name, description, framework, git, link } = service;
								return (
									<>
										<div
											className="border rounded-xl p-5 border-white/20 mb-[38px]"
											key={index}
										>
											<div className="max-w-[500px]">
												<h4 className="text-[20px] tracking-wider font-semibold mb-3">
													{name}
												</h4>
												<p className="font-secondary leading-tight mb-4">
													{description}
												</p>

												<p className="font-secondary leading-tight mb-3">
													<span className="font-semibold italic ">
														Framework : &nbsp;{" "}
													</span>
													<span className="text-lg">{framework}</span>
												</p>
												<p className="font-secondary leading-tight">
													<span className="font-semibold italic">
														Git : &nbsp;{" "}
													</span>
													<a rel="noreferrer" target="_blank" href={git}>
														{git}
													</a>
												</p>
												{name === "Todo list app" ? (
													<div className=" flex flex-col items-start">
														<a
															rel="noreferrer"
															className="text-gradient text-sm"
															target="_blank"
															href="https://thaquoctam-todo-list-vue.vercel.app"
														>
															{link}
														</a>
													</div>
												) : (
													<div className=" flex flex-col items-start">
														<a
															rel="noreferrer"
															className="text-gradient text-sm"
															target="_blank"
															href="https://thaiquoctam-webmoible-user.vercel.app"
														>
															{link} user page (user@gmail.com, pass: 123)
														</a>
														<a
															rel="noreferrer"
															className="text-gradient text-sm"
															target="_blank"
															href="https://thaiquoctam-webmobile-admin.vercel.app"
														>
															{link} admin page (admin@gmail.com, pass: 123)
														</a>
													</div>
												)}
											</div>
										</div>
									</>
								);
							})}
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
