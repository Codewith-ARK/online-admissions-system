'use client';
import InputField from "@/components/form/form-input"
import axios from "axios";
import { Plus } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form"

const Page = () => {
    const methods = useForm();
    const { register, handleSubmit, formState: { isValid } } = methods;

    const onSubmit = async (data: any) => {
        if (!isValid) return;

        try {
            const res = await axios.get('/api/institute/');
            console.log(res);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex justify-center gap-6">
                    <section id="col-left">
                        <section className="flex flex-col gap-3 card card-body card-border">
                            <h2 className="text-xl font-medium">Basic Information</h2>
                            <InputField
                                name="institute.name"
                                label="Institution Name"
                                className="w-full"
                            />
                            <InputField
                                type="url"
                                name="institute.url"
                                label="Institution Website"
                                className="w-full"
                            />
                            <div className="flex gap-3 *:flex-1">
                                <InputField
                                    name="institute.url"
                                    label="Institution Website"
                                />
                                <InputField
                                    type="url"
                                    name="institute.url"
                                    label="Institution Website"
                                />
                            </div>
                        </section>

                        <section className="card card-body card-border">
                            <h2 className="text-xl font-medium">Basic Information</h2>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Your bio</legend>
                                <textarea {...register('institute.bio')} className="textarea h-24 w-full" placeholder="Bio"></textarea>
                                {/* <div className="label">Optional</div> */}
                            </fieldset>
                        </section>

                        <section className="card card-body card-border">
                            <h2 className="text-xl font-medium">Campus Images</h2>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Your bio</legend>
                                <textarea {...register('institute.bio')} className="textarea h-24 w-full" placeholder="Bio"></textarea>
                                {/* <div className="label">Optional</div> */}
                            </fieldset>
                        </section>

                    </section>

                    <section id="col-right">

                    </section>
                </div>
                <button className="btn btn-primary" type="submit">
                    <Plus />
                    <span>Submit</span>
                </button>
            </form>
        </FormProvider>
    )
}

export default Page
