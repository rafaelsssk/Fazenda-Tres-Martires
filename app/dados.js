import { supabase } from './supabase.js'

export async function carregarPlantios() {
  const { data, error } = await supabase
      .from('plantios')
          .select('*')
              .order('id')

                if (error) throw error
                  return data
                  }

                  export async function salvarPlantio(plantio) {
                    const { data, error } = await supabase
                        .from('plantios')
                            .upsert(plantio)
                                .select()

                                  if (error) throw error
                                    return data
                                    }

                                    export async function excluirPlantio(id) {
                                      const { error } = await supabase
                                          .from('plantios')
                                              .delete()
                                                  .eq('id', id)

                                                    if (error) throw error
                                                    }
                                                    