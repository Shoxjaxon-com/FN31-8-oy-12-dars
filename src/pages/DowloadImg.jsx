import { useEffect, useState } from "react";
import { useGlobalContext } from "../hook/useGlobalContext";

function DownloadsPage() {
    const { downloadedImages } = useGlobalContext();
    const [images, setImages] = useState([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("splash-data")) || {};
        setImages(savedData.downloadedImages || []);
    }, [downloadedImages]);

    console.log("Yuklangan rasmlar:", images);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Downloaded Images</h2>
            <div className="grid grid-cols-3 gap-4">
                {Array.isArray(images) && images.length > 0 ? (
                    images.map((image, index) => (
                        <div key={index} className="border p-2">
                            <img 
                                src={image?.urls?.regular || "https://via.placeholder.com/150"} 
                                alt={image?.title || "No title"} 
                                className="w-full h-auto"
                            />
                        </div>
                    ))
                ) : (
                    <p>No images downloaded yet.</p>
                )}
            </div>
        </div>
    );
}

export default DownloadsPage;
