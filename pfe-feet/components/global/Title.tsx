const Title = ({title, className}: {title: string, className?: string}) => {

    return (
            <h3 className={`text-[#1F2937] text-xl font-medium ${className}`}>{title}</h3>
    )
}

export default Title;