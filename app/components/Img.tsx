import Image from "@graphcms/react-image";

export interface ImageType {
    handle: string;
    width: number;
    height: number;
}

export function Img({ image }: { image: ImageType }) {
    return (
        <Image
            image={image}
            withWebp
            maxWidth={1600}
            // className="w-full h-full object-cover"
        />
    )
}