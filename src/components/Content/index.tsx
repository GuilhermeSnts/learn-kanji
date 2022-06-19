import { FunctionComponent, ReactNode } from "react"
import { StyledContent } from "./styles"

type ContentProps = {
    children: ReactNode
}

export const Content: FunctionComponent<ContentProps> = ({ children }) => {
    return (
        <StyledContent>
            {children}
        </StyledContent>
    )
}