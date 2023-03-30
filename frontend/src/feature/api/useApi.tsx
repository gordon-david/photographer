import { useState, useEffect, createContext, ReactNode, useContext } from "react";

const token =
    "8175697c85b20b9eb277e585af3c9225c08080316aae69954e1137d04716cba721cc6ec3826b9089a0c9170190ca9638d6a9895c738bb1e4d9784f722abfc783eac125641d4f17d76040bc918bb73b3ec7fad738b31b8fdb49849383d6a46ca7a167e44b14721ee4b60410929fa00804b9d98d548d153efa0d30d891af1453cf";

const apiUrl = "http://localhost:5000";

interface PhotographerProfile {
    email: string;
    name: string;
    avatarUrl: string;
    aboutMeText: string[]
}

interface GalleryImage {
    title: string;
    description: string;
    url: string;
}

type GalleryImages = GalleryImage[];

type ApiData = { galleryImages: GalleryImages } & PhotographerProfile;

const apiDataDefaults: ApiData = {
    avatarUrl: "",
    galleryImages: [],
    aboutMeText: [],
    name: "",
    email: "",
};

const ApiContext = createContext<{ data: ApiData } | undefined>(undefined);

export function ApiProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<ApiData>(apiDataDefaults);

    function getData(apiId: string) {
        return fetch(apiUrl + "/api/" + apiId + "?populate=*", {
            headers: { Authorization: "bearer " + token },
        }).then((response) => response.json());
    }

    useEffect(() => {
        fetch(`${apiUrl}/api/gallery-images?populate=*`, {
            headers: { Authorization: "bearer " + token },
        })
            .then((response) => response.json())
            .then((responseData) =>
                setData((data) => ({
                    ...data,
                    galleryImages: responseData.data.map((d: any) => ({
                        title: d.attributes.title,
                        description: d.attributes.description,
                        url: apiUrl + d.attributes.image.data[0].attributes.url,
                    })),
                }))
            )

            .then(() => getData("photographer-profile"))
            .then((responseData) =>
                setData((previous) => ({
                    ...previous,
                    aboutMeText: responseData.data.attributes.about.split("\n"),
                    name: responseData.data.attributes.name,
                    email: responseData.data.attributes.email,
                    avatarUrl:
                        apiUrl + responseData.data.attributes.avatar.data.attributes.url,
                }))
            )
    }, []);

    const value = { data }

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
}

export function useApi() {
    const context = useContext(ApiContext)

    if (context === undefined) {
        throw new Error("useApi must be used within an ApiContextProvider")
    }
    return context
}