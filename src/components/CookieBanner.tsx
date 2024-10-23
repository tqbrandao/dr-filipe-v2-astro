import { useState, useEffect } from 'react';
import {cn} from "@/lib/utils.ts";
import {buttonVariants} from "@/components/ui/button.tsx";

function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieAccepted = localStorage.getItem('cookiesAccepted');

        if (!cookieAccepted) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 bg-gray-100 text-black p-2 flex justify-between items-center z-50">
        <span className="text-sm">
            <b>Importante: </b>Este site faz uso de cookies que podem conter informações de rastreamento sobre os visitantes.
        </span>
            <button
                className={cn(buttonVariants({ size: "lg", class: "text-md" }))}
                onClick={acceptCookies}
            >
                OK
            </button>
        </div>
);
}

export default CookieBanner;