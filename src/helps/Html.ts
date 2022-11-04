
export const focusInput = (id: string) => {
    const input = document.querySelector(`#${id}`) as HTMLElement
    input.focus()
};
