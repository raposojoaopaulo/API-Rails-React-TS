class Api::V1::ConsumerUnitsController < ApplicationController
  before_action :set_consumer_unit, only: %i[show update destroy]

  def index
    @consumer_units = ConsumerUnit.all
    render json: @consumer_units
  end

  def show
    render json: @consumer_unit
  end

  def create
    @consumer_unit = ConsumerUnit.new(consumer_unit_params)

    if @consumer_unit.save
      render json: @consumer_unit, status: :created
    else
      render json: @consumer_unit.errors, status: :unprocessable_entity
    end
  end

  def update
    if @consumer_unit.update(consumer_unit_params)
      render json: @consumer_unit, status: :ok
    else
      render json: @consumer_unit.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @consumer_unit.destroy
  end
  
  private

  def consumer_unit_params
    params.require(:consumer_unit).permit(
      :nickname,
      :local,
      :brand,
      :model,
    )
  end

  def set_consumer_unit
    @consumer_unit = ConsumerUnit.find(params[:id])
  end
end
