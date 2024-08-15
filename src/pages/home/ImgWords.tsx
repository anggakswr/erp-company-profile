import { Button, Image } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ImgWords() {
  return (
    <>
      <div className="container grid items-center gap-8 px-4 py-8 md:grid-cols-2 md:p-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <div className="grid grid-cols-2 items-center gap-4">
            <div>
              <Image src="/home/office3.jpg" alt="Office People 3" />
            </div>

            <div>
              <Image
                src="/home/office1.jpg"
                alt="Office People 1"
                className="mb-4"
              />

              <Image src="/home/office2.jpg" alt="Office People 2" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <h2 className="mb-4 text-xl font-bold md:text-3xl">
            Integrasi Data yang Komprehensif
          </h2>

          <p className="mb-8 text-gray-500">
            Software ERP harus mampu mengintegrasikan berbagai fungsi bisnis dan
            departemen, seperti keuangan, SDM, penjualan, persediaan, dan
            manufaktur, ke dalam satu platform yang terpusat. Hal ini
            memungkinkan akses data yang real-time dan konsisten di seluruh
            organisasi.
          </p>

          <Button color="primary" endContent={<ArrowRight />}>
            Pelajari
          </Button>
        </motion.div>
      </div>
    </>
  );
}
