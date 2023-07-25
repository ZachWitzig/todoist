type GetStartedParagraphProps = {
    text: String;
}

export const GetStartedParagraph = ({ text }: GetStartedParagraphProps) => {
    return (
        <p>
            {text}
        </p>
    )
}