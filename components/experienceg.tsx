import { dataExperenceg } from "@/data";
import Title from "./shared/title";
import Image from "next/image";

const Experienceg = () => {
    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto">
            <Title title="Experiencia" subtitle="" />
            <div className="grid md:grid-cols-2 gap-8 mt-5">
                {dataExperenceg.map((data) => (
                    <div key={data.id} className="p-6 rounded-xl border border-gray-400">
                        <h3 className="text-center text-xl mb-20">{data.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4 align-middle">
                            {data.experience.map((item) => (
                                <div>
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