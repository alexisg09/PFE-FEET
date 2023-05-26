
const Hello = ({name}: {name: string}) => {
    return (
        <div className="flex flex-row flex-nowrap font-sans items-center w-full gap-2 mx-4">
            <span className="text-[#1F2937] text-3xl font-medium">Bonjour</span>
            <h1 className="text-[#1F2937] text-2xl font-normal align-bottom">{name}</h1>
        </div>
    )
}

export default Hello;