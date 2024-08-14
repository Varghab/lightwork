import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const TenantForm = () => {
  const [tenantName, setTenantName] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emails, setEmails] = useState([""]);

  const addEmailField = () => {
    setEmails([...emails, ""]);
  };

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  return (
    <div className="">
      <div className="rounded-lg border-neutral-300 border-[1px] p-3">
        <h1 className="font-semibold text-md">Basic Details</h1>
        <div className="mt-4">
          <label className="text-sm font-medium">Tenant's Name</label>
          <Input
            type="text"
            value={tenantName}
            onChange={(e) => setTenantName(e.target.value)}
            className="mt-2 border-neutral-300 max-w-72 focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Hold Debra"
          />
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium">Date of birth</label>
          <Input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="mt-2 cursor-pointer border-neutral-300 max-w-72 focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Pick a Date"
          />
        </div>
      </div>
      <div className="rounded-lg mt-4 border-neutral-300 border-[1px] p-3">
        <h1 className="font-semibold text-md">Contact Details</h1>
        <div className="mt-4">
          <label className="text-sm font-medium">Email Address</label>
          {emails.map((email, index) => (
            <div key={index} className="flex items-center gap-6 mt-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
                className="border-neutral-300 max-w-72 focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder={`debra.holt@example.com`}
              />
              {index === emails.length - 1 && (
                <Button
                  variant="outline"
                  onClick={addEmailField}
                  className="mt-2"
                >
                  +
                </Button>
              )}
            </div>
          ))}
        </div>
        <div className="mt-2">
          <label className="text-sm font-medium">Phone Number</label>
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-2 border-neutral-300 max-w-72 focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="(704) 555-0127"
          />
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium">Emergency Contacts</label>
          <div className="mt-4 border-[1px] rounded-md border-neutral-300 max-w-72 flex items-center justify-between">
            <Input
              type="text"
              className="ring-0 border-none focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="John Doe"
            />
            <Button variant={null}>Edit</Button>
          </div>
          <div className="mt-2 border-[1px] rounded-md border-neutral-300 max-w-72 flex items-center justify-between">
            <Input
              type="text"
              className="ring-0 border-none focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="John Doe"
            />
            <Button variant={null}>Edit</Button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end">
        <Button>Confirm Changes</Button>
      </div>
    </div>
  );
};

export default TenantForm;
