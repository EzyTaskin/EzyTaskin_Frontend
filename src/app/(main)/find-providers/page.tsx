import ServicesProviderSearch from "src/app/(main)/find-providers/components/ServicesProviderSearch";
import ServiceCards from "src/app/(main)/find-providers/components/ServiceCards";

export default function FindProviders() {
    return (
        <section className="py-28 border-b border-black-100">
            <ServicesProviderSearch/>
            <ServiceCards/>
        </section>
    )
}
