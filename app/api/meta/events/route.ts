import { META_PIXEL_ID } from "@/components/analytics/meta-pixel-config";
import { handleMetaConversion } from "@/lib/analytics/meta-conversions";

export async function POST(request: Request) {
  return handleMetaConversion(request, {
    pixelId: META_PIXEL_ID,
    accessToken: process.env.META_CONVERSIONS_ACCESS_TOKEN ?? "",
    testEventCode: process.env.META_CONVERSIONS_TEST_EVENT_CODE,
    development: process.env.NODE_ENV !== "production",
  });
}
