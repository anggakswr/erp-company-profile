import { Button, Image } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

export default function BigBanner() {
  return (
    <>
      <div className="container grid gap-8 overflow-hidden px-4 py-8 md:grid-cols-2 md:overflow-visible md:p-20">
        <div>
          <h1 className="mb-4 text-3xl font-bold">Best ERP Solution</h1>

          <p className="mb-8 text-gray-500">
            Sistem ERP yang memiliki antarmuka yang intuitif dan mudah digunakan
            agar pengguna dari berbagai latar belakang dapat mengoperasikan
            sistem dengan efisien.
          </p>

          <Button color="primary" endContent={<ArrowRight />}>
            Buy Now
          </Button>
        </div>

        <div className="box-center relative">
          <Image
            src="/home/software.png"
            alt="Best ERP Solution"
            className="h-72"
          />

          <div className="absolute -right-32 h-72 w-72 rotate-45 bg-primary md:w-96" />
        </div>
      </div>
    </>
  );
}
