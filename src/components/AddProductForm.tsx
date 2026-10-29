"use client";

import type { FormEvent } from "react";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "@base-ui/react";

const AddProductForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    const res = await fetch("http://localhost:5000/products", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await res.json()
    console.log(result);
};
  return (
    <div>
      <Card className="mx-auto max-w-5xl mt-20">
        <CardContent>
          <CardHeader className="mt-10 mb-10">Add Product</CardHeader>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Product Name</Label>
                <Input id="name-1" name="name" defaultValue="" />
              </Field>
              <Field>
                <Label htmlFor="username-1">Price </Label>
                <Input id="username-1" name="price" defaultValue="" />
              </Field>
              <Field>
                <Label htmlFor="username-1">Product Image </Label>
                <Input id="username-1" name="Image" defaultValue="" />
              </Field>

              <Button type="submit">Add Product</Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProductForm;
