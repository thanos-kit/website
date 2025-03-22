export default function useCopy() {

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert(`Copied to clipboard`);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return copyToClipboard;
}
