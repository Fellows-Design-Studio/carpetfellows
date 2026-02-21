"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Category } from "@/types/sanity";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductFiltersProps {
  categories: Category[];
}

const materials = ["Villa", "Puuvilla", "Synteettinen", "Juutti", "Sisal"];
const sizes = ["60x90 cm", "80x150 cm", "120x170 cm", "160x230 cm", "200x300 cm"];
const colors = ["Beige", "Harmaa", "Valkoinen", "Musta", "Ruskea", "Sininen", "Vihreä", "Terrakotta"];

export function ProductFilters({ categories }: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const currentCategory = searchParams.get("category");
  const currentMaterial = searchParams.get("material");
  const currentColor = searchParams.get("color");

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/products?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push("/products");
  };

  const hasActiveFilters = currentCategory || currentMaterial || currentColor;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Suodattimet</h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Tyhjennä
          </Button>
        )}
      </div>

      <Separator />

      {/* Categories */}
      <div>
        <h3 className="font-medium mb-3">Kategoriat</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category._id} className="flex items-center space-x-2">
              <Checkbox
                id={`cat-${category.slug.current}`}
                checked={currentCategory === category.slug.current}
                onCheckedChange={(checked) =>
                  updateFilter("category", checked ? category.slug.current : null)
                }
              />
              <Label
                htmlFor={`cat-${category.slug.current}`}
                className="text-sm cursor-pointer"
              >
                {category.name} ({category.productCount || 0})
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Materials */}
      <div>
        <h3 className="font-medium mb-3">Materiaalit</h3>
        <div className="space-y-2">
          {materials.map((material) => (
            <div key={material} className="flex items-center space-x-2">
              <Checkbox
                id={`mat-${material}`}
                checked={currentMaterial?.toLowerCase() === material.toLowerCase()}
                onCheckedChange={(checked) =>
                  updateFilter("material", checked ? material.toLowerCase() : null)
                }
              />
              <Label
                htmlFor={`mat-${material}`}
                className="text-sm cursor-pointer"
              >
                {material}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Colors */}
      <div>
        <h3 className="font-medium mb-3">Värit</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={`col-${color}`}
                checked={currentColor?.toLowerCase() === color.toLowerCase()}
                onCheckedChange={(checked) =>
                  updateFilter("color", checked ? color.toLowerCase() : null)
                }
              />
              <Label
                htmlFor={`col-${color}`}
                className="text-sm cursor-pointer"
              >
                {color}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
