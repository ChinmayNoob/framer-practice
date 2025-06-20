'use client'
import React from 'react'
import SpiderButton from './spider-button'

function page() {
    const handleButtonClick = (e: any) => {
        console.log('Button clicked!', e);
    }

    const buttonVariants = [
        {
            variant: "default" as const,
            buttonName: "DEFAULT",
            hoverBtnName: "CLICK ME!",
            title: "Default Button",
            description: "The standard button style with classic comic book appearance"
        },
        {
            variant: "warning" as const,
            buttonName: "WARNING",
            hoverBtnName: "ALERT!",
            title: "Warning Button",
            description: "Use for caution or warning actions that need attention"
        },
        {
            variant: "primary" as const,
            buttonName: "PRIMARY",
            hoverBtnName: "CLICK IT!",
            title: "Primary Button",
            description: "Main call-to-action button for important interactions"
        },
        {
            variant: "secondary" as const,
            buttonName: "SECONDARY",
            hoverBtnName: "DANGER!",
            title: "Secondary Button",
            description: "Secondary actions or destructive operations"
        },
        {
            variant: "success" as const,
            buttonName: "SUCCESS",
            hoverBtnName: "GO GO!",
            title: "Success Button",
            description: "Positive actions and successful operations"
        }
    ]

    const actionExamples = [
        {
            variant: "primary" as const,
            buttonName: "PLAY",
            hoverBtnName: "START!",
            title: "Play Action",
            description: "Start game or media playback"
        },
        {
            variant: "success" as const,
            buttonName: "SUBMIT",
            hoverBtnName: "SEND IT!",
            title: "Submit Form",
            description: "Submit form data or complete action"
        },
        {
            variant: "secondary" as const,
            buttonName: "DELETE",
            hoverBtnName: "DESTROY!",
            title: "Delete Action",
            description: "Remove or destroy content permanently"
        },
        {
            variant: "warning" as const,
            buttonName: "SAVE",
            hoverBtnName: "KEEP IT!",
            title: "Save Action",
            description: "Preserve current state or data"
        }
    ]

    return (
        <div className="p-8 min-h-screen bg-black">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-2 font-courier-prime text-center">
                    Spiderman Theme Button Showcase
                </h1>
                <p className="text-gray-300 text-center mb-12 font-courier-prime">
                    Comic-style interactive buttons with multiple variants and hover effects
                </p>

                {/* Button Variants Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-white mb-8 font-courier-prime text-center">
                        Button Variants
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0">
                        {buttonVariants.map((button, index) => (
                            <div
                                key={index}
                                className="bg-black p-8 border-r border-gray-600 hover:border-gray-400 transition-colors duration-300 flex flex-col items-center justify-between min-h-[280px]"
                            >
                                <div className="text-center mb-6 flex-1 flex flex-col justify-center">
                                    <h3 className="text-lg font-bold text-white mb-3 font-courier-prime">
                                        {button.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-courier-prime leading-relaxed px-2">
                                        {button.description}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-4">
                                    <SpiderButton
                                        buttonName={button.buttonName}
                                        hoverBtnName={button.hoverBtnName}
                                        variant={button.variant}
                                        handleButtonClick={handleButtonClick}
                                    />
                                </div>
                                <div className="text-center">
                                    <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-courier-prime">
                                        variant="{button.variant}"
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Action Examples Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-8 font-courier-prime text-center">
                        Real-World Examples
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                        {actionExamples.map((button, index) => (
                            <div
                                key={index}
                                className="bg-black p-8 border-r border-gray-600 hover:border-gray-400 transition-colors duration-300 flex flex-col items-center justify-between min-h-[240px]"
                            >
                                <div className="text-center mb-6 flex-1 flex flex-col justify-center">
                                    <h3 className="text-lg font-bold text-white mb-3 font-courier-prime">
                                        {button.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-courier-prime leading-relaxed px-2">
                                        {button.description}
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    <SpiderButton
                                        buttonName={button.buttonName}
                                        hoverBtnName={button.hoverBtnName}
                                        variant={button.variant}
                                        handleButtonClick={handleButtonClick}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page