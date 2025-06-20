export type SpidermanButtonProps = {
    buttonName: string;
    hoverBtnName: string;
    btnClassName?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'default';
    handleButtonClick: (e: any) => void;
}