

export const logCredits = () => {
    const pieceEmoji = String.fromCodePoint(0x270c);

    const logStyle = [
        "color: #3A45F5",
        "font-size: 3em",
        "font-weight: 300",
        "padding: 100px 0px 100px 0px",
    ].join(";");

    return console.log(
        `%c © ${new Date().getFullYear()} github.com/ivantrejoc ${pieceEmoji}`,
        logStyle
    );
};
