interface IconTextProps {
	icon?: JSX.Element
	title?: string
	color?: string
	onClick?: () => void
}

export const IconText: React.FC<IconTextProps> = ({
	icon,
	title,
	color,
	onClick,
	
}) => {
	return (
		<div
			onClick={onClick}
			className={`flex  border-b border-b-[#CAC4D0]"} py-3.5 
			font-medium justify-between items-center cursor-pointer hover:bg-gray-300 px-1`}
		>
			<h5 className={`${color ? color : "text-black"} text-sm`}>
				{title}
			</h5>
			<div>{icon}</div>
		</div>
	)
}
