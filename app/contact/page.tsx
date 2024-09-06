"use client";
import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => (
<>
  <SectionTitle title="Get in Touch" />
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <Input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <Input type="email" id="email" name="email" required />
           </div>
        <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <Textarea id="message" name="message" required />
        </div>
        <Button className="w-full">Submit</Button>
        </form>
</>
    

    );
    
    export default Contact;