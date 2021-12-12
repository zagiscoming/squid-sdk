import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Network} from "./network"
import {ComplexEntity} from "./complexEntity.model"

@Entity_()
export class EventC {
  constructor(props?: Partial<EventC>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  inExtrinsic!: string | undefined | null

  @Column_("integer", {nullable: false})
  inBlock!: number

  @Column_("varchar", {length: 10, nullable: false})
  network!: Network

  @Column_("integer", {nullable: false})
  indexInBlock!: number

  @Column_("text", {nullable: false})
  field3!: string

  @Index_()
  @ManyToOne_(() => ComplexEntity, {nullable: false})
  complexField!: ComplexEntity
}
