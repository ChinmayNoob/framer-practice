"use client";

import ValorantButton from "./valorant-btn";
import ValorantPlayground from "./valorant-playground";

export default function ValorantButtonPage() {
    return (
        <div className="min-h-screen bg-black flex justify-center font-courier-prime">
            <div className="flex flex-col items-center gap-8 p-4 max-w-6xl w-full">
                <h1 className="text-4xl font-bold text-white mb-2 text-center">
                    Valorant Style Buttons
                </h1>

                {/* Example buttons section */}
                <div className="w-full">
                    <h2 className="text-2xl font-bold text-white mb-2 text-center">
                        Examples
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Default button */}
                        <ValorantButton
                            text="JOIN NOW"
                            textColor="#fff"
                            onClick={() => console.log("Join Now clicked")}
                        />

                        {/* Different text and button color */}
                        <ValorantButton
                            text="PLAY GAME"
                            buttonColor={120}
                            textColor="#000"
                            onClick={() => console.log("Play Game clicked")}
                        />

                        {/* Different color and text color */}
                        <ValorantButton
                            text="SETTINGS"
                            buttonColor={240}
                            textColor="#fff"
                            onClick={() => console.log("Settings clicked")}
                        />

                        {/* Another variation */}
                        <ValorantButton
                            text="QUIT"
                            buttonColor={300}
                            textColor="#000"
                            onClick={() => console.log("Quit clicked")}
                        />
                    </div>
                </div>

                {/* Playground Section */}
                <ValorantPlayground />
            </div>
        </div>
    );
}
