
const Heading = ({tag, text}: { tag?: keyof JSX.IntrinsicElements; text: string}) => {
    const Tag = tag || "h1"
    return <Tag className="font-bold md:text-2xl lg:text-3xl">{text}</Tag>
};

export default Heading;