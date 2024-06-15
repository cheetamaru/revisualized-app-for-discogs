export const resourceEntryCardBodyStyle: React.CSSProperties = {
    padding: 10,
}

export const resourceEntryCardTitleStyle: React.CSSProperties = {
    marginBottom: 0,
    overflow: "hidden"
}

export const resourceEntryCardDividereStyle: React.CSSProperties = {
    margin: "6px 0"
}

const coverImageStyle: React.CSSProperties = {
    borderRadius: 0,
    borderTopRightRadius: 8,
}

const coverImagePlaceholderStyle: React.CSSProperties = {
    ...coverImageStyle,
    opacity: 0.9,
}

const coverFormatTextInfoStyle: React.CSSProperties = {
    writingMode: "vertical-lr",
    textOrientation: "upright",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    textAlign: "center",
    paddingLeft: 6,
}

export const resourceEntryCardStyle = {
    coverImageStyle,
    coverImagePlaceholderStyle,
    coverFormatTextInfoStyle,
}