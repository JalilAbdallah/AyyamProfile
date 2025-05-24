import { COLORS } from "../../../constants";

const Icon = ({ name, size = 20, color = COLORS.TEXT_PRIMARY, ...props }) => {
    const IconComponent = name;

    if (!IconComponent) {
        console.warn(`Icon component for ${name} not found.`);
        return null;
    }

    return (
        <IconComponent
            width={size}
            height={size}
            color={color}
            {...props}
        />
    )
}

export default Icon;