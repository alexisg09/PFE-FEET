// react component, a chevron left icon, a title and a path as props.

import Link from "next/link";
import { TbChevronLeft } from 'react-icons/tb';


interface BackLinkProps {
    title: string;
    path: string;
}

const BackLink = ({title, path}: BackLinkProps) => {
    return (
        <div className="flex w-full">
            <Link href={path}>
                <div className="flex items-center justify-center w-full">
                    <TbChevronLeft className="text-gray-500 text-2xl" />
                    <span className="text-gray-500 text-sm font-medium">{title}</span>
                </div>
            </Link>
        </div>
    )
}

export default BackLink;
