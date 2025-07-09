import { supabase } from './supabase';

export interface NewsletterData {
  name: string;
  email: string;
}

export interface PartnershipData {
  name: string;
  email: string;
  message: string;
}

export const sendNewsletterConfirmation = async (data: NewsletterData): Promise<boolean> => {
  try {
    const { data: result, error } = await supabase.functions.invoke('newsletter-confirmation', {
      body: JSON.stringify(data),
    });

    if (error) {
      console.error('Error sending newsletter confirmation:', error);
      return false;
    }

    console.log('Newsletter confirmation sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending newsletter confirmation:', error);
    return false;
  }
};

export const sendPartnershipInquiry = async (data: PartnershipData): Promise<boolean> => {
  try {
    const { data: result, error } = await supabase.functions.invoke('partnership-inquiry', {
      body: JSON.stringify(data),
    });

    if (error) {
      console.error('Error sending partnership inquiry:', error);
      return false;
    }

    console.log('Partnership inquiry sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending partnership inquiry:', error);
    return false;
  }
}; 