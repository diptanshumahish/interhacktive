"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const BackgroundImages: string[] = [
    "https://img.playbook.com/r2bBv0QBrNw2Tk3rkpZCd1GGQsszdMoX-2OUofurZIc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MwYWEwOTQz/LWUyYTMtNGFlOS04/YWQ5LTFiYmU0ODdk/ZDM2Yw",
    "https://img.playbook.com/lBNA-3rOFCvPjhPs-VzVRcbw-G9d6XfDrqIDVI5O5oc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UyYjFlZjBk/LTEzY2EtNDYzZi05/OTlhLWU4NjcxNjMy/OTA2Yg",
    "https://img.playbook.com/20rimNnZorPR2yllT0u8iV1aoRHanaWht9lwIJ5Z4DQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RkYTUyNTVi/LTA5YzktNDAzYi1i/NDZhLTNjZThiNzJi/MzAxNQ",
    "https://img.playbook.com/sOjS5nSlSNMicW3SC6Z1DDlrBWsNZgfGVaeHPSV8x54/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2YzZWRiMTIw/LTZjMmItNDJlNy1h/YTBiLWRjMDE4MmFl/NDRkNw",
    "https://img.playbook.com/CuoxFp03etVdHsE35B7jSFtSq-vdcBW54sWf8AOgAXg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MzN2U1YzUz/LWZlODktNDhlYy05/OTEyLTZkZWQ0ODg3/NjNjOA",
    "https://img.playbook.com/fAkG9w9b7FH5aLlYAhGWQmuAjzY_NnKI5AGw8zOYMAk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M1MTc1ZjNk/LTk5YTctNDliMi1i/NzEzLTYzNTYxZTNi/OWRmOA",
    "https://img.playbook.com/gptrtTCA5Pu87GogTMKUOo6PhTcSbZ6cXV2muz9kRHs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M3YzcwOGRh/LTU3YTAtNDA2Yy04/NzhlLWNkNTExOTM1/NGFmNA",
    "https://img.playbook.com/60vo8ZImXZc2bxQFdusfij1WY-0UYkHcizCeDNNuvH0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzU5YjEzYzRj/LTNlNzctNDlkMi05/OTUyLWMwYTA5OTk2/OTk2ZA",
    "https://img.playbook.com/5U7Jq3ex5codSYTwVBmLMIQCUyiUMsNCAO_8Ht3kvgA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q1ZTdkZTM2/LTlmYmEtNGEwMC04/Y2FhLTk3MGFlMzc0/ZDI2OQ",
    "https://img.playbook.com/jdYoww2_vcShnHanCv-OeBuCuuGWD9-duJcPUo_FyHw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzg0NDNmZTUy/LTc1MmYtNGUwZS1h/N2U2LTIzMjEwNThl/YjI1Yw",
    "https://img.playbook.com/_9QEXVtAzxDovu9WHBA7I9EcQlj3StEiBqWEbgJ0DOg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I2MWZmMjVk/LWQ2ZmYtNGU0Ni1h/ZDMzLTc0ZmM5ODlk/NDNiMw",
];

export default function MarqueeHomeTwo() {
    return (
        <Marquee
            delay={0.9}
            className="flex gap-4 opacity-20"
            gradient={true}
            gradientColor={[17, 17, 17]}
            direction="right"
            speed={90}
        >
            {BackgroundImages.map((ele, idx) => {
                return (
                    <Image
                        key={idx}
                        src={ele}
                        alt={ele}
                        height={300}
                        width={400}
                        className="m-8 rounded-lg xl:w-[400px] lg:w-[350px] h-auto md:w-[300px] w-[200px]  "
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8P5GhHgAGOAIRSvoJaQAAAABJRU5ErkJggg=="
                    />
                );
            })}
        </Marquee>
    );
}
