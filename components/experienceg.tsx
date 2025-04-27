import { dataExperenceg } from "@/data";
import Title from "./shared/title";
import Image from "next/image";

const Experienceg = () => {
    return (
        <div className="p-6 md:px-12 md:py-46 max-w-5xl mx-auto">
            <h2 className="text-3xl flex flex-col items-center">Experiencia</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-5">
                {dataExperenceg.map((data) => (
                    <div key={data.id} className="p-6 rounded-xl border border-gray-400">
                        <h3 className="text-center text-xl mb-20">{data.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4 ">
                            {data.experience.map((item) => (
                                <div className="flex items-center">
                                    {
                                    <Image
                                    src={item.imageUrl}
                                    alt={item.alt}
                                    width={100} height={100}
                                    />

                                    
                                    /* <p className="mx-auto">
                                        {item.alt}
                                    </p> */}
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>);
}

export default Experienceg; 