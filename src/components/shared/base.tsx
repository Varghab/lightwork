import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import TenantForm from "./tenantForm";
import RentalForm from "./rentalForm";

const BaseContainer = () => {
  return (
    <div className="bg-slate-900 h-72 flex items-center flex-wrap justify-center max-w-5xl mx-auto p-4 rounded-lg">
      <div className="flex flex-wrap gap-3">
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Edit Tenant</Button>
          </DialogTrigger>
          <DialogContent className="h-[35rem] overflow-y-auto custom-scrollbar">
            <DialogHeader>
              <DialogTitle className="font-semibold text-lg">
                Edit Tenant
              </DialogTitle>
            </DialogHeader>
            <TenantForm />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Edit Rental Details</Button>
          </DialogTrigger>
          <DialogContent className="h-[32rem] overflow-y-auto custom-scrollbar">
            <DialogHeader>
              <DialogTitle className="font-semibold text-lg">
                Edit Rental Details
              </DialogTitle>
            </DialogHeader>
            <RentalForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BaseContainer;
