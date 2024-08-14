import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const RentalForm = () => {
  return (
    <div className="">
      <div className="rounded-lg border-neutral-300 border-[1px] p-3">
        <div>
          <label className="text-sm font-semibold">Rent Amount</label>
          <Input
            type="text"
            className="mt-1 border-neutral-300 max-w-72 focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="£1,200/month"
          />
        </div>
        <div className="mt-4">
          <label className="text-sm font-semibold">Rent Due Date</label>
          <Input
            type="text"
            className="mt-1 cursor-pointer border-neutral-300 max-w-72 focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="1st of each month"
          />
        </div>
        <div className="mt-4">
          <label className="text-sm font-semibold">Security Deposit</label>
          <Input
            type="text"
            className="mt-2 border-neutral-300 max-w-72 focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="£100"
          />
        </div>
        <div className="mt-4">
          <label className="text-sm font-semibold">Lease Period</label>
          <div className="max-w-72 flex items-center gap-2">
          <Input
            type="date"
            className="mt-2 border-neutral-300 max-w-72 focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="£100"
          /><Input
            type="date"
            className="mt-2 border-neutral-300 max-w-72 focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="£100"
          />
          </div>
          
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end">
        <Button>Confirm Changes</Button>
      </div>
    </div>
  );
};

export default RentalForm;
